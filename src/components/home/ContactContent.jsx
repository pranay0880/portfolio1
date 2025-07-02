import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../../styles/Buttons.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showThankYouModal, setShowThankYouModal] = useState(false);

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
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setShowThankYouModal(true);
        setTimeout(() => {
          setShowThankYouModal(false);
        }, 3000);
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
    <Box
      sx={{
        padding: {
          lg: "60px 80px",
          md: "20px 40px",
          sm: "20px 20px",
          xs: "20px 20px",
        },
      }}
    >
      <Typography gutterBottom variant="h4" fontWeight={"500"}>
        Got Ideas? lets work together
      </Typography>
      <Typography
        variant="h6"
        color={(theme) => theme.palette.text.secondary}
        gutterBottom
        sx={{
          textWrap: "balance",
          fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "16px" },
        }}
      >
        "I’m always open to exciting opportunities, new projects, or just a good
        conversation. My inbox is always open — whether you’ve got a question,
        an idea, or just want to say hey, feel free to reach out. I’ll do my
        best to get back to you!"
      </Typography>
      <Grid
        container
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Grid
          item
          size={{ xs: 12, md: 4 }}
          sx={{ padding: "20px", width: "100%" }}
        >
          <Box
            sx={{
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
              border: (theme) => `1px solid ${theme.palette.text.border}`,
              backgroundColor: (theme) => theme.palette.background.default,
              borderRadius: "4px",
            }}
          >
            <Box>
              <Typography variant="body1">You can Email me here</Typography>
              <Typography
                variant="body2"
                sx={{ color: (theme) => theme.palette.text.secondary }}
              >
                pranay0880@gmail.com
              </Typography>
            </Box>
            <a href="mailto:pranay0880@gmail.com" style={{ color: "inherit" }}>
              <IconButton>
                <ArrowForwardIcon />
              </IconButton>
            </a>
          </Box>
          <Box
            sx={{
              padding: "12px",
              height: "300px",
              borderRadius: "4px",
              border: (theme) => `1px solid ${theme.palette.text.border}`,
              backgroundColor: (theme) => theme.palette.background.default,
            }}
          >
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d30448.647386733144!2d78.37325717073195!3d17.455840476139553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1751136392021!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Box>
        </Grid>
        <Grid item size={{ xs: 12, md: 8 }} sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{
                width: { xs: "100vw", lg: "50vw" },
              }}
            >
              <Box sx={{ gap: "20px" }}>
                <TextField
                  name="name"
                  label="Name"
                  variant="outlined"
                  required
                  fullWidth
                  value={formData.name}
                  onChange={handleInputChange}
                  sx={{
                    marginBottom: "12px",
                    backgroundColor: (theme) =>
                      theme.palette.background.default,
                  }}
                />

                <TextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  required
                  fullWidth
                  value={formData.email}
                  onChange={handleInputChange}
                  sx={{
                    marginBottom: "12px",
                    backgroundColor: (theme) =>
                      theme.palette.background.default,
                  }}
                />

                <TextField
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  required
                  fullWidth
                  value={formData.subject}
                  onChange={handleInputChange}
                  sx={{
                    marginBottom: "12px",
                    backgroundColor: (theme) =>
                      theme.palette.background.default,
                  }}
                />

                <TextField
                  name="message"
                  label="Message"
                  variant="outlined"
                  required
                  multiline
                  fullWidth
                  minRows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  sx={{
                    marginBottom: "12px",
                    backgroundColor: (theme) =>
                      theme.palette.background.default,
                  }}
                />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "16px",
                  }}
                >
                  <Button
                    className="bt"
                    type="submit"
                    variant="contained"
                    disabled={
                      formData.name === "" ||
                      formData.email === "" ||
                      formData.subject === "" ||
                      formData.message === ""
                    }
                  >
                    <span className="msg"></span>
                    Submit
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Grid>
      </Grid>
      <Modal
        open={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
        aria-labelledby="thank-you-title"
        aria-describedby="thank-you-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            textAlign: "center",
          }}
        >
          <Typography id="thank-you-title" variant="h6" component="h2">
            🙏 Thank You!
          </Typography>
          <Typography id="thank-you-description" sx={{ mt: 2 }}>
            Your message has been sent successfully. 😊
          </Typography>
        </Box>
      </Modal>
    </Box>
  );
};

export default ContactContent;
