import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/Buttons.css";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.send(
        "service_8pewrcg", //EmailJS service ID
        "template_nhaz55o", //EmailJS template ID
        formData,
        "ztogn27NqArmtf6UK" //EmailJS public key
      );

      if (result.status === 200) {
        alert("Your message has been sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send your message. Please try again later.");
    }
  };

  return (
    <Box sx={{ padding: "40px" }}>
      <Typography gutterBottom variant="h4" fontWeight={"bold"} color="#008AD8">
        Got Ideas? lets work together
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: "50vw",
          }}
        >
          <Paper elevation={3} sx={{ padding: "32px", gap: "20px" }}>
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              required
              fullWidth
              value={formData.name}
              onChange={handleInputChange}
              sx={{ marginBottom: "12px" }}
            />

            <TextField
              name="email"
              label="Email"
              variant="outlined"
              required
              fullWidth
              value={formData.email}
              onChange={handleInputChange}
              sx={{ marginBottom: "12px" }}
            />

            <TextField
              name="subject"
              label="Subject"
              variant="outlined"
              required
              fullWidth
              value={formData.subject}
              onChange={handleInputChange}
              sx={{ marginBottom: "12px" }}
            />

            <TextField
              name="message"
              label="Message"
              variant="outlined"
              required
              multiline
              fullWidth
              value={formData.message}
              onChange={handleInputChange}
              sx={{ marginBottom: "12px" }}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "16px",
              }}
            >
              <Button className="bt" type="submit" variant="contained">
                <span className="msg"></span>
                Submit
              </Button>
            </Box>
          </Paper>
        </form>
      </Box>
    </Box>
  );
};

export default ContactContent;
