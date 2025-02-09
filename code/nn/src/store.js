import { writable, derived } from "svelte/store";
import { tweened } from "svelte/motion";
import { linear } from "svelte/easing";

export const margin = writable({
  top: 3,
  bottom: 3,
  left: 3,
  right: 3,
});
export const marginScroll = writable({
  top: 3,
  bottom: 3,
  left: 3,
  right: 3,
});
export const mobile = writable(true);

export const network = writable([3, 2, 3, 2, 1]);
export const networkInteractive = writable([3, 2, 5, 5, 5, 1]);
export const labels = writable(["input", "function", "hidden"]);
export const numLayers = derived(network, ($network) => $network.length);
export const numLayersInteractive = derived(
  networkInteractive,
  ($networkInteractive) => $networkInteractive.length
);
export const showLayerLine = writable(false);
export const showSubScript = writable(false);
export const drawActivation = writable(false);
