import reactLogo from "./assets/reactlogo.png"

export function Footer({ todos, toggleTodo, deleteTodo }) {
    return (
        <div className="footer justify-content-space-around">
            <p className="margin-right">Powered By</p>
            <img src={reactLogo} alt="Logo React" />
            <p className="margin-left">(and Alyra)</p>
        </div>
    )
}