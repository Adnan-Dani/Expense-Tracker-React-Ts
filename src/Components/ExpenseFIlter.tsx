import React from 'react'

import categories from '../Data/categories'

interface Props {
    onSelectCategory: (category: string) => void
}

const ExpenseFIlter = ({ onSelectCategory }: Props) => {
    return (
        <select className="form-select mb-3" onChange={event => onSelectCategory(event.target.value)} >
            <option value="">All Categories</option>
            {categories.map(category => <option value={category}>{category}</option>)}
        </select>
    )
}

export default ExpenseFIlter
