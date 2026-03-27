"use client"
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalButton() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "15min" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <button data-cal-namespace="15min"
        data-cal-link="roney-gajjar-qbehlx/15min"
        data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
    >Contact us</button>;
};