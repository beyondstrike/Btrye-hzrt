import {
  Button,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { COLORS, ICONS, IMAGES } from "../contants";
import { useModal } from "../context/ModalContext";

const getDate = (date) => {
  let fDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  return fDate;
};

const AddMoreDetails = () => {
  const { closeModal } = useModal();
  return (
    <View style={styles.addMoreDetailsContainer}>
      <View style={{ borderBottomWidth: 1, padding: 5, marginBottom: 20 }}>
        <TouchableOpacity
          style={{
            height: 30,
            width: 30,
            padding: 7,
            position: "absolute",
            left: -5,
            top: 5,
            zIndex: 10,
          }}
          onPress={closeModal}
        >
          <Image
            style={{ height: "100%", width: "100%", resizeMode: "contain" }}
            source={ICONS.close}
          />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold",
            color: COLORS.darkgray,
            textAlign: "center",
          }}
        >
          הערות
        </Text>
      </View>
      <TextInput
        multiline
        style={{ borderWidth: 1, padding: 10, fontSize: 15 }}
      />
      <TouchableOpacity
        style={{
          backgroundColor: COLORS.primary,
          padding: 10,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>שמירה</Text>
      </TouchableOpacity>
    </View>
  );
};

const ReportDetails = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [text, setText] = useState(getDate(date));

  const { setShowModal, setModalContent, setModalType } = useModal();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    setText(getDate(currentDate));
  };

  const addComment = () => {
    setModalType(1);
    setModalContent(<AddMoreDetails />);
    setShowModal(true);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.rowData}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setShow(true)}
          >
            <Image style={styles.icon} source={ICONS.calendar} />
            <Text>{text}</Text>
          </TouchableOpacity>
          <Text style={styles.rowDataText}>תאריך חשבונית : </Text>
        </View>
        <View style={styles.rowData}>
          <TextInput
            keyboardType="numeric"
            style={[styles.iconButton, styles.textInput]}
          />
          <Text style={styles.rowDataText}>סכום חשבונית : </Text>
        </View>
        <Text style={[styles.note, { marginTop: -7, marginBottom: 10 }]}>
          * יש להקליד בדיוק כפי שמופיע בחשבונית
        </Text>
        <View style={styles.rowData}>
          <TextInput style={[styles.iconButton, styles.textInput]} />
          <Text style={styles.rowDataText}>שם לקוח : </Text>
        </View>
        <View style={styles.rowData}>
          <View style={styles.iconButton}>
            <TouchableOpacity style={styles.plusMinusButton}>
              <Text style={styles.plusMinusButtonText}>-</Text>
            </TouchableOpacity>
            <TextInput style={[styles.textInput, { flex: 1 }]} />
            <TouchableOpacity style={styles.plusMinusButton}>
              <Text style={styles.plusMinusButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.rowDataText}>כמות אורחים : </Text>
        </View>
        <Text style={[styles.note, { marginTop: -15, marginBottom: 10 }]}>
          * בכיבוד
        </Text>
        <View style={styles.rowData}>
          <TextInput
            keyboardType="numeric"
            style={[styles.iconButton, styles.textInput]}
          />
          <Text style={styles.rowDataText}>מספר חשבונית : </Text>
        </View>
        <View style={styles.rowData}>
          <TouchableOpacity
            style={[styles.iconButton, { justifyContent: "flex-end" }]}
            onPress={addComment}
          >
            <Text>הוספת הערות</Text>
            <Image
              style={[styles.icon, { marginRight: 0, marginLeft: 10 }]}
              source={ICONS.message}
            />
          </TouchableOpacity>
        </View>
        {/* <Image style={styles.coverImage} source={IMAGES.reportDetails} /> */}
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.primary,
              padding: 10,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              borderRadius: 5,
            }}
          >
            <Text style={{ fontWeight: "bold" }}>אישור</Text>
          </TouchableOpacity>
        </View>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={"date"}
            display="default"
            onChange={onChange}
            minimumDate={new Date()}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ReportDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: COLORS.white,
  },
  rowData: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 10,
  },
  iconButton: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  icon: {
    height: 30,
    width: 30,
    resizeMode: "contain",
    marginRight: 10,
  },
  rowDataText: {
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 20,
    flex: 1,
    textAlign: "right",
  },
  textInput: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 3,
    paddingHorizontal: 10,
    textAlign: "right",
  },
  note: {
    fontSize: 10,
    fontWeight: "bold",
    color: COLORS.darkgray,
    textAlign: "right",
  },
  plusMinusButton: {
    height: 35,
    width: 35,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    margin: 5,
    borderRadius: 20,
  },
  plusMinusButtonText: {
    fontSize: 18,
    color: COLORS.darkgray,
    fontWeight: "bold",
  },
  coverImage: {
    height: "50%",
    width: "100%",
    resizeMode: "contain",
    position: "absolute",
    bottom: 50,
    left: 20,
  },
  addMoreDetailsContainer: {
    backgroundColor: COLORS.white,
    minHeight: "20%",
    width: "80%",
    padding: 20,
  },
});
