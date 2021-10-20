import { Field, useFormikContext } from "formik";
import ReactMarkdown from "react-markdown";
import "./MarkdownField.css";
import React from 'react';

export default function MarkdownField(props:markdownField) {
    const {values} = useFormikContext<any>();
    return (
        <div className="mb3 form-markdown">
            <div>
            <label>{props.displayName}</label>
            <div>
                <Field name={props.field} as="textarea" className="form-textarea"/>
            </div>
            </div>
            <div>
                <label>{props.displayName} (preview):</label>
                <div className="markdown-container">
                    <ReactMarkdown>{values[props.field]}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}
interface markdownField{
    displayName: string;
    field: string;

}