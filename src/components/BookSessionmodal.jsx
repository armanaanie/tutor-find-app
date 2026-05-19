"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";

export function BookSessionmodal() {
  return (
    <Modal>
      <Button variant="secondary">Book Session Form</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Contact Us</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Fill out the form below and we'll get back to you.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Student Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>
                  
                  <TextField className="w-full" name="phone" type="number">
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number" />
                  </TextField>
                  <TextField className="w-full" name="tutorId" type="text">
                    <Label>Tutor Id</Label>
                    <Input placeholder="" />
                  </TextField>
                  
                  <TextField className="w-full" name="tutorname" type="text">
                    <Label>Tutor Name</Label>
                    <Input placeholder=" " />
                  </TextField>
                  
                  <TextField className="w-full" name="email">
                    <Label>Student email</Label>
                    <Input placeholder="Enter your email" />
                  </TextField>
                </form>
              </Surface>
            </Modal.Body>
            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button slot="close">Send Message</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}