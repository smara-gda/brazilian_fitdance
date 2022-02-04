function MM_DW_effectPulsate(obj, method, effect, mode, times, speed) {
  obj[method](effect, { mode: mode, times: times }, speed);
}
