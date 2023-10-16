import React from 'react'
import { z } from 'zod';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import categories from '../Data/categories';

const schema = z.object({
    description: z.string().min(3, { message: "Description shpuld be at least 3 characters" }).max(50),
    amount: z.number({ invalid_type_error: "Amount is required" }).min(0.01).max(10_000),
    category: z.enum(categories, { errorMap: () => ({ message: "Category is required." }) })
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: ExpenseFormData) => void
}
const ExpenseForm = ({ onSubmit }: Props) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })

    return (
        <form onSubmit={handleSubmit(data => {
            onSubmit(data);
            reset();
        })}>

            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} type="text" id='description' className='form-control' />
                {errors.description && <p className="text-danger">{errors.description.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input {...register('amount', { valueAsNumber: true })} type="number" id='amount' className='form-control' />
                {errors.amount && <p className="text-danger">{errors.amount.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select {...register('category')} id='category' className='form-control'>
                    <option value=""></option>
                    {categories.map(category => <option value={category}>{category}</option>)}
                </select>
                {errors.category && <p className="text-danger">{errors.category.message}</p>}

            </div>
            <button className="btn btn-primary" type='submit'> Submit </button>
        </form>
    )
}

export default ExpenseForm
