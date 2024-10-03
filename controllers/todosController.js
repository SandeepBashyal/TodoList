const Todo = require('../models/Todo');

const createTodo = async (req, res) => {
    try {
        const {id}= req.user;
        const {title, description, status, public} = req.body;
        const todo = await Todo.create({title, description, status,public, userId: id});
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({message: 'Todo not created'});
    }
};

const getTodos= async(req,res)=>{
    try {
        const todos = await Todo.findAll();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json({message: 'Todos not found'});
    }
}

const getTodo = async (req, res) => {
    try {
        const {id} = req.params;
        const todo = await Todo.findByPk(id);
        if(todo){
            res.status(200).json(todo);
        }else{
            res.status(404).json({message: `Todo with id ${id} not found`});
        }
        
    } catch (error) {
        res.status(404).json({message: `Todo with id ${id} not found`});
    }
} 

const updateTodo = async (req, res) => {
    const {id} = req.params;
    try {
        const {title, description, status} = req.body;
        const todo = await Todo.findByPk(id);
        if(todo){
            const updatedTodo = await todo.update({title, description, status});
            res.status(200).json(updatedTodo);
        }else{
            res.status(404).json({message: `Todo with id ${id} not found`});
        }    
    } catch (error) {
        console.log(error);
        res.status(404).json({message: `Todo with id ${id} not found`});
    }
}

const deleteTodo = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await Todo.destroy({
            where: { id: id }
        });
        if (result) {
            res.status(200).json({ message: `Todo deleted` });
        } else {
            res.status(404).json({ message: `Todo with id ${id} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: `An error occurred: ${error.message}` });
    }
}


module.exports = {
    createTodo,
    getTodos,
    getTodo,
    updateTodo,
    deleteTodo
};