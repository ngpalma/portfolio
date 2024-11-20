/* eslint-disable react/prop-types */
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/system";

export default function MyCarousel({ array, renderArray, ...carouselProps }) {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Carousel {...carouselProps}>
        {array.map((item, index) => (
          <Box key={index}>{renderArray(item)}</Box>
        ))}
      </Carousel>
    </Box>
  );
}
