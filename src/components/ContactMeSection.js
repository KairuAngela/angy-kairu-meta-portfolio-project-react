import React, {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const ContactMeSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: 
    {
      firstName: "",
      email: "",
      type: "",
      comment: "",
    },

    onSubmit: async (values, { resetForm }) => 
    {
      await submit(values);
      resetForm();
      console.log("Submit button works", values); /*Check for my button not working*/
    },
    
    validationSchema: Yup.object
    (
      {
        firstName: Yup.string().required("First name is required"),
        email: Yup.string()
          .email("Invalid email format")
          .required("Email is required"),
        type: Yup.string().required("Type is required"),
        comment: Yup.string().required("Comment is required"),
      }
    ),
  });

  React.useEffect(() => 
  {
    if (!response) return;

    const { type, message } = response;

    if (type === "success") {
      onOpen(
        "success",
        `Message sent successfully! Thank you, ${formik.values.firstName}`
      );
      formik.resetForm();
    } else if (type === "error") {
      onOpen("error", message);
    }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#000000"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>

              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                  <Input
                    id="firstName"
                    {...formik.getFieldProps("firstName")}
                  />
                              
                  <FormErrorMessage>
                    {formik.errors.firstName}
                  </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    {...formik.getFieldProps("email")}
                  />
                  
                  <FormErrorMessage>
                    {formik.errors.email}
                  </FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" {...formik.getFieldProps("type")}>
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">Open source consultancy session</option>
                  <option value="other">Other</option>
                </Select>
                
                <FormErrorMessage>
                  {formik.errors.type}
                </FormErrorMessage>
              </FormControl>

               <FormControl isInvalid={formik.touched.comment && formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                  <Textarea
                    id="comment"
                    height={250}
                    {...formik.getFieldProps("comment")}
                  />

                  <FormErrorMessage>
                    {formik.errors.comment}
                  </FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                width="full"
                bg="white"
                color="black"
                _hover={{ bg: "gray.200" }}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default ContactMeSection;
