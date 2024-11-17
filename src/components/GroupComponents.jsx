
import "./../assets/my.css";

const SecondComponents = () => {
    return (
        <div>Second Component</div>
    );
}

const ThirdComponent = () => {
    return (
        <>
            <div className="redColor">Hello ThirdComponent</div>
            <div>I want to display using JSX Fragment</div>
        </>
    )
}

export  { SecondComponents, ThirdComponent };