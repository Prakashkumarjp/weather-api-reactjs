import React from 'react';
import './ToDoItem.css';


function TodoItem(props) {
            return (
              <div className="list"
                onClick={(items) => {
                  props.onChecked(props.id);
                }}
              >
               <p>{props.text} <span><i class="fas fa-trash-alt"></i></span></p>
              </div>
            );
          }
export default TodoItem;