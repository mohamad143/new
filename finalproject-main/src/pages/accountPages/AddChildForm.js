import React, { useState } from 'react';

const AddChildForm = ({ addChild, setAddingChild }) => {
  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== '') {
      addChild({ name, questions: [  { question: 'What is your favorite color?', answer: '' },
        { question: 'What is your favorite toy?', answer: '' },{ question: 'What is your favorite color?', answer: '' }],gifts:[{
          id: 1,
          image: 'https://www.bing.com/th?id=OIP.Log4gDEat0nArXu2KgG7lwHaFZ&w=143&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          name: '1',
          price: '21',
          description: 'gg'
        },{
          id:2,
          image: 'https://www.bing.com/th?id=OIP.Log4gDEat0nArXu2KgG7lwHaFZ&w=143&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          name: '2',
          price: '44',
          description: 'grggr'
        },{
          id: 3,
          image: 'https://www.bing.com/th?id=OIP.Log4gDEat0nArXu2KgG7lwHaFZ&w=143&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          name: '3',
          price: '55',
          description: 'rththrt'
        },{
          id:4,
          image: 'https://www.bing.com/th?id=OIP.Log4gDEat0nArXu2KgG7lwHaFZ&w=143&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          name: '4',
          price: '909',
          description: '32423'
        },{
          id: 5,
          image: 'https://www.bing.com/th?id=OIP.Log4gDEat0nArXu2KgG7lwHaFZ&w=143&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2',
          name: '5',
          price: '4324',
          description: 'rbdgrbd'
        }] });
        
        
      setAddingChild(false);
    }
  };

  return (
    <div className="add-child-form">
      <h2>Add Child</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Child Name</label>
          <input 
            type="text" 
            className="form-control" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Child</button>
        <button type="button" className="btn btn-secondary" onClick={() => setAddingChild(false)}>Cancel</button>
      </form>
    </div>
  );
};

export default AddChildForm;
