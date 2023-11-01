import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Confidiality() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <p onClick={handleClickOpen} className="privacyP">
        Privacy Policy
      </p>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Privacy Policy Melting Pot Language School"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <h1>Privacy Policy</h1>

            <p>Effective Date: 01.11.2023</p>
            <p>Last Updated: 01.11.2023</p>

            <p>
              <strong>Melting Pot Language School</strong>
            </p>

            <p>(hereinafter referred to as "we," "our," or "the School")</p>

            <p>
              At Melting Pot Language School, we are committed to protecting
              your privacy and ensuring the security of your personal
              information. This Privacy Policy outlines the types of information
              we collect, how we use it, and the measures we take to safeguard
              your data. By accessing our website and using our services, you
              consent to the practices described in this Privacy Policy.
            </p>

            <h2>1. Collection of Personal Information:</h2>

            <p>
              We do not collect or store personal information from visitors to
              our website, except when explicitly provided by you for the
              purpose of inquiries, registrations, or communication.
            </p>

            <h2>2. Use of Personal Information:</h2>

            <p>
              The personal information you provide to us will be used solely for
              the purpose for which it was collected. We do not share, sell, or
              disclose your personal information to third parties, except as
              required by law.
            </p>

            <h2>3. Cookies and Tracking:</h2>

            <p>
              We may use cookies or similar technologies to enhance your
              experience on our website. These technologies do not collect
              personal information but may track your interactions with our
              website to improve our services.
            </p>

            <h2>4. Third-Party Links:</h2>

            <p>
              Our website may contain links to third-party websites for your
              convenience. We are not responsible for the privacy practices or
              content of these external sites. We encourage you to review the
              privacy policies of any third-party websites you visit.
            </p>

            <h2>5. Data Security:</h2>

            <p>
              We take reasonable measures to protect your personal information
              from unauthorized access or disclosure. However, no data
              transmission or storage method is entirely secure. While we strive
              to protect your personal information, we cannot guarantee its
              absolute security.
            </p>

            <h2>6. Changes to this Privacy Policy:</h2>

            <p>
              We may update this Privacy Policy as necessary to reflect changes
              in our practices or for legal compliance. Any updates will be
              posted on our website with the effective date.
            </p>

            <h2>7. Contact Information:</h2>

            <p>
              If you have questions or concerns regarding this Privacy Policy,
              please contact us at:
            </p>

            <p>Melting Pot Language School</p>
            <p>Rudaki ave. 127 734003 Dushanbe</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
