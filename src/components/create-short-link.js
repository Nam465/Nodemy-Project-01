import React, { useState, useEffect, useContext } from "react"
import { useFormik } from "formik"
import { create } from "../repositories/short-link"
import AuthenticateContext from "../context/authenticate"

function ShowShortLink(props) {
    const { shortLink, onReset } = props

    return (
        <div>
            {shortLink.shorLink}
            <button onClick={onReset}>Reset</button>
        </div>
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
        formik.setFieldValue('originUrl', '')
    }

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="originUrl">Origin Url</label>
                <input
                    id="origin-url"
                    name="originUrl"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.originUrl}
                />
                <div style={{ color: "red" }}>{formik.errors.originUrl}</div>
                <button type="submit">Create</button>
            </form>

            {shortLink && (
                <ShowShortLink shortLink={shortLink} onReset={handleReset} />
            )}
        </div>
    )
}
