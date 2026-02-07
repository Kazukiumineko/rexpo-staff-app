
import TimeTable from "@/components/time-table-ui/time-table";
import Header from "@/components/main-ui/header";


export default function TimetablePage() {
    return (
        <main className="flex flex-col min-h-screen bg-[#f1f1f1] print:bg-[#ffffff] w-full" style={{ overflowX: "clip" }}>

            <Header isVisible={true} />

            <TimeTable />




        </main>
    );
}

/*
// Under Construction Code (Backup)
import UnderConstruction from "@/components/shared/under-construction";
import Header from "@/components/main-ui/header";
import FooterBar from "@/components/main-ui/footer-bar";
import { useState } from "react";

export default function TimetablePageBackup() {
    const [showHeader] = useState(true);

    return (
        <main className="flex flex-col min-h-screen bg-[#f1f1f1]">
            <Header isVisible={showHeader} invert />
            <div className="pt-20"> {/* ヘッダー分の余白 * /}
                <UnderConstruction />
            </div>
            <FooterBar variant="black" />
        </main>
    );
}
*/
