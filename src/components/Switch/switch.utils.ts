export const switchVariants = {
  primary: "#D9D9D9:#ffff:#22C55E",
  light: "#25232D:#ffff:#775CFF",
};

interface GetVariantParams {
  variant: "primary" | "light";
  active?: boolean;
  forBg?: boolean;
  invert?: boolean;
}

export function getSwitchVariant({ variant, active, forBg, invert}: GetVariantParams) {
  const result = switchVariants[variant].split(":");
  if (forBg) {
    if (invert) {
      return result[active ? 0 : 2];
    }
    return result[active ? 2 : 0];
  }
  return result;
}
