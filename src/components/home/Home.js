import { useTranslation } from "react-i18next";
import Page from "../UI/Page";
import style from "./Home.module.css";

export default function Home() {
  const { t } = useTranslation();

  return (
    <Page className={style.home}>
      <h1>Artur Lepczyński</h1>
      <p>{t("home.title")}</p>
      <div className={style["info-wrapper"]}>
      <div className={style["lang-controls"]}>

      </div>
      <div className={style.bio}>
        {/* <p>This will be my bio</p> */}
      </div>
      </div>
    </Page>
  );
}
