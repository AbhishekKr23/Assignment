import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { Save } from 'lucide-react';
import type { UserData } from '../types';

const INITIAL_FORM_STATE: UserData = {
  id: uuidv4(),
  name: '',
  email: '',
  address: '',
  phone: '',
};

const UserForm = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [isDirty, setIsDirty] = useState(false);
  const toast = useToast();

  
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userData') || 'null');
    if (savedData) {
      setFormData(savedData);
    }
  }, []);

 
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = 'You have unsaved changes!';
      }
    };
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [isDirty]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setIsDirty(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Save button clicked!"); 
    console.log("Current formData:", formData); 

    const userData: UserData = {
      ...formData,
      id: formData.id || uuidv4(), 
    };

    console.log("Saving data to local storage..."); 
    localStorage.setItem('userData', JSON.stringify(userData)); 

    setFormData(INITIAL_FORM_STATE);
    setIsDirty(false);

    toast({
      title: 'Success',
      description: 'User data saved successfully',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    console.log("Save complete!");
  };

  return (
    <Box p={6} borderWidth="1px" borderRadius="lg" bg="white" shadow="md">
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>User ID</FormLabel>
            <Input value={formData.id} isReadOnly />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Address</FormLabel>
            <Input name="address" value={formData.address} onChange={handleChange} placeholder="Enter your address" />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Phone</FormLabel>
            <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
          </FormControl>

          <Button type="submit" colorScheme="green" width="full" leftIcon={<Save />}>
            Save
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default UserForm;
