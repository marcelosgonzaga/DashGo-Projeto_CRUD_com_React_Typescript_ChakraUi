import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Marcelo Gonzaga</Text>
          <Text color="gray.300" fontSize="small">
            marcelosgonzaga@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Marcelo Gonzaga"
        src="https://avatars.githubusercontent.com/u/121734635?v=4"></Avatar>
    </Flex>
  );
}
