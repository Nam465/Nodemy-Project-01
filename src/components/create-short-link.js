import React, { useState, useEffect, useContext } from "react"
import { useFormik } from "formik"
import { create } from "../repositories/short-link"
import AuthenticateContext from "../context/authenticate"
import { Button, Input, TextField } from "@material-ui/core"

function ShowShortLink(props) {
    const { shortLink, onReset } = props

    return (
        <form>
            <label className="form-label" htmlFor="originUrl">
                Your Short Link
            </label>
            <div className="form-input">
                <TextField
                    name="shortLink"
                    type="text"
                    variant="outlined"
                    value={shortLink.shorLink}
                    fullWidth={true}
                />
            </div>
            <Button onClick={onReset} variant="contained">
                Reset
            </Button>
        </form>
    )
}

export default function CreateShortLink(props) {
    const authenticate = useContext(AuthenticateContext)
    const [shortLink, setShortLink] = useState(null)

    const formik = useFormik({
        initialValues: {
            originUrl: "",
        },
        validate: (values) => {
            const error = {}

            if (!values.originUrl) error.originUrl = "Origin Url is require"

            return error
        },
        onSubmit: (values) => {
            handleSubmit(values)
        },
    })

    const handleSubmit = async (values) => {
        const shortLink = await create(authenticate[0].token, values.originUrl)
        setShortLink(shortLink)
    }

    const handleReset = () => {
        setShortLink(null)
        formik.setFieldValue("originUrl", "")
    }

    return (
        <div className="form-short-link">
            {!shortLink && (
                <form>
                    <label className="form-label" htmlFor="originUrl">
                        Origin Url
                    </label>
                    <div className="form-input">
                        <TextField
                            id="origin-url"
                            name="originUrl"
                            type="text"
                            variant="outlined"
                            onChange={formik.handleChange}
                            value={formik.values.originUrl}
                            onBlur={formik.handleBlur}
                            fullWidth={true}
                        />
                        {formik.touched.originUrl && (
                            <div style={{ color: "red" }}>
                                {formik.errors.originUrl}
                            </div>
                        )}
                    </div>
                    <Button variant="contained" onClick={formik.submitForm}>
                        Create
                    </Button>
                </form>
            )}

            {shortLink && (
                <ShowShortLink shortLink={shortLink} onReset={handleReset} />
            )}
        </div>
    )
}
