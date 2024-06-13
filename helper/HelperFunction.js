export default function HelperFunction() {
    let tempObject = { isVisibleElement: false }
    return {
        isVisibleElement: (element) => {
            const observer = new IntersectionObserver(onTargetDivVisible, {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            });
            observer.observe(element);
            function onTargetDivVisible(entries, observer) {
                for (let index = 0; index < entries.length; index++) {
                    const entry = entries[index];
                    if (entry.isIntersecting) {
                        tempObject = { ...tempObject, isVisibleElement: true }
                        return;
                    }
                    tempObject = { ...tempObject, isVisibleElement: false }
                }
            }
            return tempObject.isVisibleElement
        },
        animateOnVisible: (element, animationName) => {
            if (element.classList.contains(animationName)) {
                return;
            }
            const observer = new IntersectionObserver(onTargetDivVisible, {
                root: null,
                rootMargin: '0px',
                threshold: 0.01
            });
            observer.observe(element);
            function onTargetDivVisible(entries, observer) {
                for (let index = 0; index < entries.length; index++) {
                    const entry = entries[index];
                    if (entry.isIntersecting) {
                        element.classList.add('animate__animated')
                        element.classList.add(animationName);
                    } 
                }
            }
        },
    }
}