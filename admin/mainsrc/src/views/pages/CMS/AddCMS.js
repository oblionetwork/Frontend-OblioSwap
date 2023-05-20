import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { toast } from "react-toastify";
import helper from "../../../helpers/axiosHelper";
import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import CKEditor from "react-ckeditor-component";

import "react-datepicker/dist/react-datepicker.css";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles'
import { Col, Row, Card, Form, Button, ButtonGroup, Breadcrumb, Spinner, InputGroup, Dropdown } from '@themesberg/react-bootstrap';


const listCms = helper.listCms()
const addcms = helper.addCms()

const AddCMS = () => {

  let history = useHistory();

  const { register, handleSubmit, errors, watch, reset } = useForm({ mode: "onBlur", });

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const useStyles = makeStyles(({ palette, ...theme }) => ({
    buttonProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }))

  const classes = useStyles()

  const onSubmit = data => {
    let data1 =
    {
      "Heading": title,
      "Detail": description,
    }

    helper.postData(addcms, data1)
      .then((res) => {
        if (res.status == true) {
          toast.success(res.message);
          history.push("/cms");
        }
        else {
          toast.error(res.message);
        }
      })
  }

  const onChange = (evt) => {
    var newContent = evt.editor.getData();
    setDescription(newContent);
  }

  let config = {
    toolbarGroups: [
      { name: "document", groups: ["mode", "document", "doctools"] },
      {
        name: "editing",
        groups: ["find", "selection", "spellchecker", "editing"]
      },
      { name: "forms", groups: ["forms"] },
      { name: "basicstyles", groups: ["basicstyles", "cleanup"] },
      {
        name: "paragraph",
        groups: ["list", "indent", "blocks", "align", "bidi", "paragraph"]
      },
      "/",
      { name: "links", groups: ["links"] },
      { name: "insert", groups: ["insert"] },
      { name: "styles", groups: ["styles"] },
      { name: "colors", groups: ["colors"] },
      { name: "tools", groups: ["tools"] },
      "/",
      { name: "clipboard", groups: ["clipboard", "undo"] },
      { name: "others", groups: ["others"] },
      { name: "about", groups: ["about"] }
    ],
    removeButtons:
      "Save,NewPage,Preview,Print,Templates,Cut,Copy,Paste,PasteText,PasteFromWord,Find,SelectAll,Scayt,Replace,Form,Checkbox,Textarea,Select,Button,ImageButton,HiddenField,CreateDiv,BidiLtr,BidiRtl,Language,Flash,Smiley,SpecialChar,PageBreak,Iframe,Anchor,ShowBlocks,About,CopyFormatting,Undo,Redo",
    fontSize_sizes: "16/16px;24/24px;48/48px;",
    font_names:
      "Arial/Arial, Helvetica, sans-serif;" +
      "Times New Roman/Times New Roman, Times, serif;" +
      "Verdana",
    allowedContent: true
  };

  return (
    <div className="add-token-container">
      <h5>Add CMS</h5>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4">ADD CMS</h5>
          <Form className="mt-4" onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
            {/* <Form.Group id="name" className="mb-4">
              <Form.Label>Heading</Form.Label>
              <Form.Control type="text" placeholder="Title" name="heading" defaultValue={title} ref={register({ required: "required" })} />
              {errors.heading && <p className="text-danger">{errors.heading.message}</p>}
            </Form.Group> */}
            <Form.Group id="subject" className="mb-4">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="title" name="title" defaultValue={description}
                onChange={(event) => setTitle(event.target.value)} ref={register({ required: "required" })} />
              {errors.title && <p className="text-danger">{errors.title.message}</p>}
            </Form.Group>
            <Form.Group>
              <Form.Label>Content</Form.Label>
              <CKEditor
                activeClass="p10"
                config={config}
                content={description}
                events={{
                  change: onChange
                }}
              />
            </Form.Group>
            <br />
            <Form.Group>
              <Button type="submit" className="btn btn-primary">Submit</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );

};

export default AddCMS;
