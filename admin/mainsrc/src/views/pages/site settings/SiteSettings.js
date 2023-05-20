import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import helper from "src/helpers/axiosHelper";

const SiteSettings = () => {
  const { register, handleSubmit, errors, watch, reset } = useForm({
    mode: "onBlur",
  });
  const [siteName, setSiteName] = useState("");
  const [copyRightsText, setCopyRightsText] = useState("");
  const [telegramURL, setTelegramURL] = useState("");
  const [linkedinURL, setLinkedinURL] = useState("");
  const [hackenURL, setHackenURL] = useState("");
  const [twitterURL, setTwitterURL] = useState("");
  const [gitURL, setGitURL] = useState("");
  const [id, setId] = useState("");

  const apiURL = helper.siteSettingsURL()

  useEffect(() => {
    axios.get(apiURL + "sitesettings/getsitesettings")
      .then((res) => {
        setSiteName(res.data.result.siteName);
        setCopyRightsText(res.data.result.copyRightsText);
        setTelegramURL(res.data.result.telegramURL);
        setTwitterURL(res.data.result.twitterURL);
        setGitURL(res.data.result.gitURL);
        setHackenURL(res.data.result.hackenURL);
        setLinkedinURL(res.data.result.linkedinURL);
        setId(res.data.result._id);
      })
      .catch((err) => toast.error(err));
  }, []);

  const onSubmit = () => {
    let siteData = {
      siteName: siteName,
      copyRightsText: copyRightsText,
      telegramURL: telegramURL,
      twitterURL: twitterURL,
      gitURL: gitURL,
      linkedinURL: linkedinURL,
      hackenURL: hackenURL,
      id: id
    };
    
    axios.post(apiURL + "/sitesettings",siteData)
      .then((res) => {
        if (res.data.status == 200) {
          toast.success(res.data.message);
          reset();
        } else {
          toast.error(res.data.message);
        }
      })
      .catch((err) => toast.error(err));
  };

  return (
    <div className="settings-container mt-5">
      <h5>Site Settings</h5>
      <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
        <br></br>

        <div className="row">
          <div className="col-3">
            <label>Site Name:</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Site Name"
              autoComplete="off"
              value={siteName}
              onChange={(event) => setSiteName(event.target.value)}
              name="sitename"
              ref={register({
                required: "Site Name is required",
                pattern: {
                  value: /^[a-zA-Z ]*$/,
                  message: "Only Characters",
                },
              })}
            />
            {errors.sitename && (
              <div className="form-error">{errors.sitename.message}.</div>
            )}
          </div>
        </div>

        <br></br>

        <div className="row">
          <div className="col-3">
            <label>Copyrights Text:</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              autoComplete="off"
              className="form-control"
              onChange={(event) => setCopyRightsText(event.target.value)}
              placeholder="Copyrights Text"
              value={copyRightsText}
              name="copyrightstext"
              ref={register({
                required: "CopyRight Text is required",

              })}
            />
            {errors.copyrightstext && (
              <div className="form-error">{errors.copyrightstext.message}.</div>
            )}
          </div>
        </div>
        <br></br>
        <h5>Social Media</h5>
        <br></br>
        <div className="row">
          <div className="col-3">
            <label>Linkedin URL:</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              placeholder="FaceBook URL"
              value={linkedinURL}
              onChange={(event) => setLinkedinURL(event.target.value)}
              name="linkedinurl"
              ref={register({
                required: "Linkedin URL is required",
                pattern: {
                  value:
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                  message: "Should Match URL Pattern",
                },
              })}
            />
            {errors.linkedinurl && (
              <div className="form-error">{errors.linkedinurl.message}.</div>
            )}
          </div>
        </div>

        <br></br>
        <div className="row">
          <div className="col-3">
            <label>Git URL:</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              placeholder="Medium URL"
              value={gitURL}
              onChange={(event) => setGitURL(event.target.value)}
              name="gitURL"
              ref={register({
                required: "Git URL is required",
                pattern: {
                  value:
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                  message: "Should Match URL Pattern",
                },
              })}
            />
            {errors.gitURL && (
              <div className="form-error">{errors.gitURL.message}.</div>
            )}
          </div>
        </div>

        <br></br>
        <div className="row">
          <div className="col-3">
            <label>Telegram URL:</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              placeholder="Telegram URL"
              value={telegramURL}
              onChange={(event) => setTelegramURL(event.target.value)}
              name="telegramurl"
              ref={register({
                required: "Telegram URL is required",
                pattern: {
                  value:
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                  message: "Should Match URL Pattern",
                },
              })}
            />
            {errors.telegramurl && (
              <div className="form-error">{errors.telegramurl.message}.</div>
            )}
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-3">
            <label>Hacken URL:</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Hackedn URL"
              autoComplete="off"
              name="hackenurl"
              value={hackenURL}
              onChange={(event) => setHackenURL(event.target.value)}
              ref={register({
                required: "Hacken URL is required",
                pattern: {
                  value:
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                  message: "Should Match URL Pattern",
                },
              })}
            />
            {errors.hackenurl && (
              <div className="form-error">{errors.hackenurl.message}.</div>
            )}
          </div>
        </div>
        <br></br>
        <div className="row">
          <div className="col-3">
            <label>Twitter URL:</label>
          </div>
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              value={twitterURL}
              placeholder="Twitter URL"
              onChange={(event) => setTwitterURL(event.target.value)}
              name="twitterurl"
              ref={register({
                required: "Twitter URL is required",
                pattern: {
                  value:
                    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                  message: "Should Match URL Pattern",
                },
              })}
            />
            {errors.twitterurl && (
              <div className="form-error">{errors.twitterurl.message}.</div>
            )}
          </div>
        </div>

        <br></br>
        <br></br>

        <div align="center">
          <button className="btn" style={{ background: "#13316f", color: "white", border: "2px solid #13316f" }}>Submit</button>
        </div>

        <br></br>
        <br></br>
      </form>
    </div>
  );
};

export default SiteSettings;
