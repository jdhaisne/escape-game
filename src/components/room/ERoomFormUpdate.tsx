import { EButton } from "../button/EButton";
import { EInput } from "../input/EInput";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

import { API } from "../../services/ESAPI";
import { logger } from "../../services/ESLogger";
import { useNavigate } from "react-router-dom";

export const ERoomFormUpdate = ({
  roomId,
  name,
  description,
  age_limit,
}: {
  roomId: string;
  name: string;
  description: string;
  age_limit: number;
  onSubmit?: () => void;
}) => {
  interface FormData {
    roomName: string;
    desc: string;
    age_limit: number;
  }

  const [updateData, setUpdateData] = useState<FormData>({
    roomName: name,
    desc: description,
    age_limit,
  });
  const methods = useForm<FormData>();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { roomName, desc } = updateData;
    console.log("submit", roomName);
    try {
      const res = await API.Put(`rooms/${roomId}`, {
        name: roomName,
        description: desc,
      });
      if (res.status === 200) {
        console.log("updated");
        navigate(0);
      } else {
        logger.error("update failed");
        // setShowErrorMessage(true);
      }
    } catch (error) {
      logger.error("Login failed: Internal Server Error");
    }
  };

  const handleFieldChange = (field: string, value: string) => {
    setUpdateData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <EInput
          type="text"
          label="room name"
          id="roomName"
          placeholder="room name"
          onChange={(e) => handleFieldChange("roomName", e.target.value)}
          error=""
          hasLabel
          value={updateData.roomName}
          className="modal__input"
        ></EInput>
        <div>
          <label htmlFor="description">description</label>
          <textarea
            id="description"
            value={updateData.desc}
            onChange={(e) => handleFieldChange("desc", e.target.value)}
            className="modal__input"
          />
        </div>

        <EInput
          type="number"
          label="age limit:"
          id="age"
          placeholder=""
          onChange={(e) => handleFieldChange("age_limit", e.target.value)}
          error=""
          hasLabel
          value={updateData.age_limit}
          className="modal__input"
        ></EInput>
        <EButton classArray={["modal__button"]}>update</EButton>
      </form>
    </FormProvider>
  );
};
