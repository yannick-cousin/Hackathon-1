import React from 'react'

function CategorieProfile(props) {
    return (
        <div>
            <div className='titreCatProfile'>
            <div className='texteCatProfile'>{props.nameCat}</div>
            <div className='decoLine'></div>
            </div>
            <input className='texteareaProfile' type={props.type} maxlength={props.lengthCat} placeholder={props.placeholderCat} defaultValue={props.defaultValueCat}></input>
        </div>
    )
}

export default CategorieProfile
