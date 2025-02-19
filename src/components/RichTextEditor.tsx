import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import {
  Box,
  Button,
  ButtonGroup,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
} from 'lucide-react';

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  return (
    <ButtonGroup spacing={2} mb={4}>
      <Tooltip label="Bold">
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          size="sm"
        >
          <Bold size={16} />
        </Button>
      </Tooltip>
      <Tooltip label="Italic">
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          size="sm"
        >
          <Italic size={16} />
        </Button>
      </Tooltip>
      <Tooltip label="Bullet List">
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          size="sm"
        >
          <List size={16} />
        </Button>
      </Tooltip>
      <Tooltip label="Ordered List">
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          size="sm"
        >
          <ListOrdered size={16} />
        </Button>
      </Tooltip>
    </ButtonGroup>
  );
};

const RichTextEditor = ({ content = '', onChange }: { content?: string; onChange?: (content: string) => void }) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
  });

  const bgColor = useColorModeValue('white', 'gray.800');

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      bg={bgColor}
      shadow="md"
    >
      <MenuBar editor={editor} />
      <Box
        borderWidth="1px"
        borderRadius="md"
        p={2}
        minH="200px"
        _focus={{ outline: 'none', borderColor: 'blue.500' }}
      >
        <EditorContent editor={editor} />
      </Box>
    </Box>
  );
};

export default RichTextEditor;