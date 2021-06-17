import React, {Component} from "react";
import Preloader from "../assets/common/preloader/Preloader";

export const WithSuspense = (Component) => {

    return (props) => {
        return <React.Suspense fallback={<Preloader/>}>
            <Component {...props}/>
        </React.Suspense>

    };
}