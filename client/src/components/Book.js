import React from 'react'


function Book({title, subtitle, authors, link, description, image, button}) {
    return (
        <div className="book">
            <img className="book__image" />
            <div className="book__info">
             <h3 className="book__title">{title}</h3>
            <h4 className="book__title">{subtitle}</h4>
                <p>{authors}</p>
             </div>

             <a href={link}
             className="btn view-button heading-subtitle ml-2"
             target="_blank"
             rel="noopener noreferrer"
             >
                 View
             </a>
             </div>
             <div className="p-2 bd-highlight">
             <button></button>
        </div>
    )
}


export default Book
