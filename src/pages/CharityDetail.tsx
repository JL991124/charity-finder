import { useLocation, useNavigate } from "react-router-dom";
import { Charity } from "../types/charity.types";
import CharityDetail from "../components/CharityDetail";
import { useEffect } from "react";

const CharitDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const charity: Charity = location.state ? location.state.charity : null;

  useEffect(() => {
    if (charity === null) {
      navigate("/*");
    }
  }, [charity]);

  return <CharityDetail {...charity} />;
};

export default CharitDetailPage;
