import React, { useState } from "react";
import PickImageModal from "../components/pickImageModal";
import PopupWithButtons from "../components/PopupWithButtons";
import { IMAGES } from "../contants";
import { useModal } from "../context/ModalContext";
import ListScreenTemplate from "./ListScreenTemplate";

const ReportScreen = () => {
  const { setShowModal, setModalContent } = useModal();
  const [image, setImage] = useState();
  const handleAddImage = () => {
    setModalContent(<PickImageModal setImage={setImage} />);
    setShowModal(true);
  };

  const addReport = () => {
    setModalContent(
      <PopupWithButtons
        text={"אנא הקלד את מהות ההוצאה של החשבונית"}
        buttons={[
          {
            text: "אישור",
            onPress: handleAddImage,
          },
        ]}
      />
    );
    setShowModal(true);
  };
  const DATA = [
    {
      text: "חניה",
      onPress: addReport,
    },
    {
      text: "דלק",
      onPress: addReport,
    },
    { text: "כיבוד", onPress: addReport },
    {
      text: "מוניות וניסיעות",
      onPress: addReport,
    },
    {
      text: "אחר",
      onPress: addReport,
    },
  ];
  return <ListScreenTemplate data={DATA} image={IMAGES.report} />;
};

export default ReportScreen;
