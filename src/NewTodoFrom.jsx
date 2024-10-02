import { useState } from "react"

export function NewTodoForm({ addTodo }) {

    const [newItem, setNewItem] = useState("") // État pour stocker le nouvel élément

    function handleSubmit(e) {
        e.preventDefault() // Empêche le rechargement de la page lors de la soumission du formulaire
        if (newItem === "") return // Ne fait rien si le champ est vide
    
        addTodo(newItem) // Appelle la fonction onSubmit avec le nouvel élément

        setNewItem("") // Réinitialise le champ de saisie
    }
    
    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New item</label> {/* Étiquette pour le champ de saisie */}
                <input
                    value={newItem} // Valeur du champ de saisie
                    onChange={e => setNewItem(e.target.value)} // Met à jour l'état lors de la saisie
                    type="text"
                    id="item" />
            </div>
            <button className="btn">Add</button> {/* Bouton pour ajouter l'élément */}
        </form>
    )
}