import ActorForm from "./ActorForm";
import React from 'react';

export default function EditActor() {
    return (
        <>
            <h3>Edit Actor</h3>
            <ActorForm model={{name:'Tomm Holland', dateOfBirth: new Date('1996-06-01T00:00:00'),
            biography: `# Tom **bold text**`,
              pictureURL: "http://upload.turkcewiki.org/wikipedia/commons/thumb/b/be/Arnold_Schwarzenegger_-_2019_%2833730956438%29_%28cropped%29.jpg/800px-Arnold_Schwarzenegger_-_2019_%2833730956438%29_%28cropped%29.jpg"  
        }}
        onSubmit={values => console.log(values)}
        />
        </>
    )
  }
  