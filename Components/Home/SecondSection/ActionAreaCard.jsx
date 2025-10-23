"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
} from "@mui/material";
import styles from "./ActionAreaCard.module.css";

export default function ActionAreaCard({
  image,
  title,
  description,
  bgColor,
  colors,
}) {
  // Ensure Cloudinary images are optimized
  const optimizedImage = image.includes("cloudinary.com")
    ? `${image}?f_auto,q_auto,w_600`
    : image;

  return (
    <Card className={styles.card} style={{ backgroundColor: bgColor, border: colors === "#151920" ? "0px solid #151920" : "none" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={styles.cardMedia}
          image={optimizedImage}
          alt={title}
          loading="lazy"
        />
        <CardContent className={styles.cardContent} style={{ color: colors }}>
          <Typography
            className={styles.title}
            gutterBottom
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            className={styles.description}
            variant="body2"
            style={{ color: colors, backgroundColor: bgColor }}
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
