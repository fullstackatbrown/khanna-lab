'use client';

import ReCAPTCHA from "react-google-recaptcha"
import { verifyCaptcha } from "./ServerActions"

import React, { useState, useEffect, useRef } from 'react';

process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"

function FormElt({ label, name, type }: { label: string, name: string, type: string }) {
    let inputElt;
    if(type == "area") {
        inputElt = (<textarea name={name} className="rounded-sm p-1 border border-black w-full"/>)
    } else if(type == "text") {
        inputElt = (<input type="text" name={name} className="rounded-sm p-1 border border-black w-full" required/>)
    } else {
        inputElt = (<div>Check Code</div>)
    }
    return (
        <div className="p-2 w-full">
            <div className="text-left text-lg">{label}</div>
            {inputElt}
        </div>
    );
}

function Form() {

    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const [isVerified, setIsverified] = useState<boolean>(false)

    async function handleCaptchaSubmission(token: string | null) {
        // Server function to verify captcha
        await verifyCaptcha(token)
        .then(() => setIsverified(true))
        .catch(() => setIsverified(false))
    }

    const scriptUrl = "https://script.google.com/macros/s/AKfycbzBxllxvCUQs-knXSR9PilO6IoX5ngw7dwWE1PEOlWt6k4EM3bxFVctZRxWp4DVAK9h1g/exec"
    const [formdone, setFormdone] = useState(false);

    const submitBtn = isVerified ? <button id="submit" type="submit" value="Submit"
    className="w-28 border-black bg-primary-red rounded-xl text-white h-10 mt-5 text-lg">Submit</button> : <input id="submit" type="button" value="Submit"
    className="w-28 border-black bg-primary-red rounded-xl text-white h-10 mt-5 text-lg"/>

    return (
        <form id="data-form" action={scriptUrl} target="_blank" method="POST" className="w-1/2 min-w-[340px] text-left">
            <div className="flex text-center">   
                <FormElt label="First name: " name="first-name" type="text" />
                <FormElt label="Last name: " name="last-name" type="text" />
            </div>
            
            <FormElt label="Email: *" name="email" type="text" />
            <FormElt label="Institution/affiliation: *" name="org" type="text"/>
            <FormElt label="Reason for downloading: *" name="reason" type="text"/>

            <FormElt label="Plan to merge with another source?" name="merge" type="area"/>
            <FormElt label="How did you hear about us?" name="hear" type="area"/>

            <div className="text-lg flex px-2 items-start">
                <input type="checkbox" name="mail" className="basis-1 mr-5 mt-[5px] w-5 h-5" />
                <span>Join our mailing list?</span>
            </div>
            <div className="text-lg flex px-2 items-start">
                <input className="mr-5 mt-[5px] w-5 h-5 basis-1" type="checkbox" name="tos" required/>
                <span>By downloading our data you agree to cite this work with the text <i>&quot;The MediCOIN report was developed by the Brown University Center for Advancing Health Policy Through Research through support from Arnold Ventures.&quot;</i></span>
            </div>
            <div className="mb-5"></div>
            <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                ref={recaptchaRef}
                onChange={handleCaptchaSubmission}
            />
            {submitBtn}
        </form>
    )
}

export default function Download() {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const updateHeaderHeight = () => {
        const header = document.getElementById('header');
        if (header) {
            setHeaderHeight(header.offsetHeight);
        }
        };
        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);
        return () => window.removeEventListener('resize', updateHeaderHeight);
    }, []);

    return (
    <div className="h-full min-h-screen w-full">
        {/* Dynamic spacer based on header height */}
        <div style={{ minHeight: `${headerHeight}px` }}></div>

        {/* Site content */}
        <div id="content" className="text-center p-5">
            <div id="title-text" className="mt-[5vh] mb-4 text-4.5xl-responsive font-bold text-primary font-circ-std">
                Data Download
                <div id="explanation" className="mb-8 text-lg font-[100]">
                    Fill out the form to request a download link.
                </div>
            </div>
            
            <div className="flex justify-center">
            <Form/>
            </div>
        </div>
        <div className="mb-[5vh]"></div>
    </div>);
}

