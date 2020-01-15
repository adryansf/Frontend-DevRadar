import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { loadDevs, removeDev } from "../../store/actions";
import api from "../../services/api";

import DevItem from "../DevItem";

import "./styles.css";

export default function Main() {
  const devs = useSelector(state => state.devs);
  const dispatch = useDispatch();

  async function handleRemoveDev(id) {
    await api.delete(`/devs/${id}`);
    dispatch(removeDev({ _id: id }));
  }

  useEffect(() => {
    async function loadAllDevs() {
      const { data: devs } = await api.get("/devs");
      dispatch(loadDevs(devs));
    }

    loadAllDevs();
  }, [dispatch]);

  return (
    <main>
      <ul>
        {devs.map(dev => (
          <DevItem dev={dev} key={dev._id} handleRemove={handleRemoveDev} />
        ))}
      </ul>
    </main>
  );
}
