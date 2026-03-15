import React, { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { NV, WH, ST, BL } from "./shared/data";
import { Mono } from "./shared/ui";
import { CSS } from "./shared/styles";
import HomePage from "./pages/HomePage";
import CitiesPage from "./pages/CitiesPage";
import CommunityPage from "./pages/CommunityPage";
import CityPage from "./pages/CityPage";
import JobsPage from "./pages/JobsPage";
//import NetworkPage from "./pages/NetworkPage";
import InboxPage from "./pages/InboxPage";
import MembershipPage from "./pages/MembershipPage";
import ProfilePageContainer from "./pages/ProfilePage";

export default function App() {
  const [page, setPage] = useState("home");
  const [cityCtx, setCityCtx] = useState(null);
  const [unreadCount, setUnreadCount] = useState(2);

  const nav = (p, params = {}) => {
    setPage(p);
    if (params.city) setCityCtx(params.city);
    setTimeout(() => window.scrollTo(0, 0), 0);
  };

  return (
    <div style={{minHeight: "100vh",display:"flex",flexDirection:"column", background: NV, color: WH, fontFamily: "'DM Sans','Segoe UI',sans-serif", fontWeight: 300 }}>
      <style>{CSS}</style>

      <Nav page={page} nav={nav} unreadCount={unreadCount} />

      {page === "home" && <HomePage nav={nav} />}
      {page === "cities" && <CitiesPage nav={nav} />}
      {page === "city" && cityCtx && <CityPage city={cityCtx} nav={nav} />}
      {page === "community" && <CommunityPage nav={nav} />}
      {page === "jobs" && <JobsPage />}
      {page === "inbox" && <InboxPage setUnreadCount={setUnreadCount} />}
      {page === "profile" && <ProfilePageContainer nav={nav} />}
      {page === "membership" && <MembershipPage nav={nav} />}

      <footer style={{ background: ST, borderTop: "1px solid rgba(255,255,255,.05)", padding: "1.75rem", textAlign: "center" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
          <Mono c="PILOTS ✈️" s={12} col={BL} style={{ fontWeight: 500, letterSpacing: "0.2em" }} />
          <Mono c="PASSPORT" s={12} style={{ letterSpacing: "0.15em" }} />
        </div>
        <Mono c="Where Pro Pilots Gather · Join Today" s={10} />
      </footer>
    </div>
  );
}
// {page === "network" && <NetworkPage nav={nav} />}
