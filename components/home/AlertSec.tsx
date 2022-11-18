import React, { useRef } from 'react';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay, Button, useDisclosure, AlertDialogCloseButton, Flex
} from '@chakra-ui/react'

export default function AlertSec() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef() as React.MutableRefObject<HTMLImageElement>;

    return (
        <>
            <Flex alignItems={'center'} justifyContent='center' mb='10'>
                <Button onClick={onOpen} colorScheme='teal'>Alert</Button>
            </Flex>
            <AlertDialog
                motionPreset='slideInBottom'
                leastDestructiveRef={cancelRef}
                onClose={onClose}
                isOpen={isOpen}
                isCentered
            >
                <AlertDialogOverlay />

                <AlertDialogContent>
                    <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure you want to discard all of your notes? 44 words will be
                        deleted.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button onClick={onClose}>
                            No
                        </Button>
                        <Button colorScheme='red' ml={3}>
                            Yes
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
}