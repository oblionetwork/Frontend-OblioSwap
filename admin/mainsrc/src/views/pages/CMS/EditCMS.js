import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import helper from "../../../helpers/axiosHelper";
import CKEditor from "react-ckeditor-component";
import { makeStyles } from '@material-ui/core/styles'
import { useHistory, useParams } from "react-router";
import { Col, Row, Card, Form, Button, ButtonGroup, Breadcrumb, Spinner, InputGroup, Dropdown } from '@themesberg/react-bootstrap';

const editCmsUrl = helper.editCms();
const singleCms = helper.singleCms();


const EditCMS = ({ match }) => {
  const { register, handleSubmit, errors, watch, reset } = useForm({ mode: "onBlur", });

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  let history = useHistory();

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

  let id = match.params.id;

  let data = {
    id: id,
  }

  const onSubmit = () => {
    let data1 =
    {
      "Heading": title,
      "Detail": description,
      "id": id,
    }

    helper.postData(editCmsUrl, data1)
      .then((res) => {

        if (res.data.status == '200') {
          toast.success(res.data.message);
          history.push("/cms");
        }
        else {
          toast.error(res.message);
        }
      })
  };

  useEffect(() => {
    helper.postData(singleCms, data)
      .then((res) => {
        setTitle(res.data.result.Heading);
        setDescription(res.data.result.Detail);
      })
      .catch((err) => toast.error(err));
  }, []);

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
    <div className="updatetoken-container">
      <h5>Edit CMS</h5>
      <Card border="light" className="bg-white shadow-sm mb-4">
        <Card.Body>
          <h5 className="mb-4">Edit CMS</h5>
          <Form className="mt-4" onSubmit={handleSubmit(onSubmit)} autoComplete={"off"}>
            {/* <Form.Group id="name" className="mb-4">
              <Form.Label>Heading</Form.Label>
              <Form.Control type="text" placeholder="Title" name="heading" defaultValue={title} ref={register({ required: "required" })} />
              {errors.heading && <p className="text-danger">{errors.heading.message}</p>}
            </Form.Group> */}
            <Form.Group id="subject" className="mb-4">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="title" name="title" onChange={(event) => setTitle(event.target.value)} defaultValue={title} ref={register({ required: "required" })} />
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
              <Button type="submit" className="btn btn-primary">Update</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default EditCMS;
