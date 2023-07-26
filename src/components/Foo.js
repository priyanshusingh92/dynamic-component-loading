import React, { useEffect, useState } from "react";

export default (props) => {
  console.log(props);

  const [fields, setFields] = useState(props.block?.formFields);

  useEffect(() => {
    if (props.block.formFields) {
      const newFields = props.block?.formFields.filter((el) => el.visible);
      setFields(newFields);
    }
  }, []);
  const addInformationHandler = () => {
    if (props.block.formFields) {
      const newFields = props.block?.formFields;
      setFields(newFields);
    }
  };

  return (
    <div className="foo">
      {props.block?.formFields && (
        <button onClick={addInformationHandler}>Add more information</button>
      )}
      <hr />
      Hi I'm a Foo component with the headline:
      <h2>{props.block.headline}</h2>
      {fields &&
        fields.map((el, i) => {
          return (
            <input
              key={i}
              placeholder={el.label}
              value={el.value}
              type={el.inputType}
            />
          );
        })}
    </div>
  );
};
