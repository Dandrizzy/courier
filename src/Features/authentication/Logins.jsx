import { FaUser, } from 'react-icons/fa6';
import { Button, Dialog, Flex, Text, TextField } from '@radix-ui/themes';
import { useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { useSignup } from './useSignup';
import { useUser } from './useUser';

function Logins() {
  const { signup, isLoading: isSigningUp } = useSignup();
  const { register, handleSubmit, reset } = useForm();
  const { login, isLoading } = useLogin({ route: '/' });
  const { user, isAuthenticated } = useUser();
  function signUp(data) {
    signup(
      data,
      {
        onSettled: () => reset(),
      });
  }

  function onSubmit(data) {
    if (!data?.email || !data?.password) return;
    login(
      { email: data?.email, password: data?.password },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }

  return (
    <>
      {isAuthenticated ? <p className=' text-orange-500 text-sm'>{user?.user_metadata?.fullName}</p> :
        <Form onSubmit={() => handleSubmit(onSubmit())}>
          <Dialog.Root>
            <Dialog.Trigger>
              <FaUser />
            </Dialog.Trigger>

            <Dialog.Content style={{ maxWidth: 450 }}>
              <Dialog.Title>Log in</Dialog.Title>
              <Dialog.Description size="2" mb="4">
                Sign in with your gmail and password, or sign up for free
              </Dialog.Description>

              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Email
                  </Text>
                  <TextField.Input
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Please provide a valid email address",
                      },
                    })}
                    id='email'
                    type='text'
                    defaultValue="freja@example.com"
                    placeholder="Enter your email"
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Password
                  </Text>
                  <TextField.Input
                    {...register("password", {
                      required: "This field is required",
                      minLength: {
                        value: 8,
                        message: "Password needs a minimum of 8 characters",
                      },
                    })}
                    id='password'
                    type='password'
                    defaultValue="wanted"
                    placeholder="Enter your password"
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Full Name
                  </Text>
                  <TextField.Input
                    {...register("fullName", { required: "This field is required" })}
                    id='fullName'
                    type='text'
                    defaultValue="John Doe"
                    placeholder="Enter your full name"
                  />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>

                <Button disabled={isLoading || isSigningUp} onClick={handleSubmit(onSubmit)}>{isLoading ? <SpinnerMini /> : 'Sign in'}</Button>

                <Button disabled={isLoading || isSigningUp} onClick={handleSubmit(signUp)}>{isSigningUp ? <SpinnerMini /> : 'Sign up'}</Button>
              </Flex>
            </Dialog.Content>
          </Dialog.Root>

        </Form>
      }
    </>
  );
}

export default Logins;
