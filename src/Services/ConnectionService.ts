import { CamConnect } from "../Types/ConnectionTypes";

export async function openCam(params: CamConnect) {
  const constraints = {
    audio: { echoCancellation: true },
    video: {
      device_id: params.id,
      width: { min: params.mw },
      height: { min: params.mh },
    },
  };
  return await navigator.mediaDevices.getUserMedia(constraints);
}

export async function getConnectedDevices(params: string) {
  const dev = await navigator.mediaDevices.enumerateDevices();
  return dev.filter((device) => device.kind === params);
}
