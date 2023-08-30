import RootLayout from './layout/PageLayout';
import DashboardLayout from '@/pages/user_area/layout/ContentLayout';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { usePathname, useParams } from 'next/navigation';

export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  }
}

const messages_list = [
  {
    "message_id": 1,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test",
  },
  {
    "message_id": 2,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test 2",
  },
  {
    "message_id": 3,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test 3",
  },
  {
    "message_id": 1,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test",
  },
  {
    "message_id": 2,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test 2",
  },
  {
    "message_id": 3,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test 3",
  },
  {
    "message_id": 1,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test",
  },
  {
    "message_id": 2,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test 2",
  },
  {
    "message_id": 3,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test 3",
  },
  {
    "message_id": 1,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test",
  },
  {
    "message_id": 2,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test 2",
  },
  {
    "message_id": 3,
    "message_sender": "system",
    "message_time": "10 min",
    "message_header": "test 3",
  },
];
const message_data = {
  "message_id": 1,
  "message_sender": "system",
  "message_header": "test",
  "threads": [
    {
      "sender": "admin",
      "read_status": "unread",
      "sent_status": "delivered",
      "msg_timestamp": "01:01:00 UTC",
      "msg_text": "test",
    },
    {
      "sender": "user",
      "read_status": "read",
      "sent_status": "delivered",
      "msg_timestamp": "01:00:00 UTC",
      "msg_text": "hello",
    },
  ]
};
  
const ActiveMessageLink = ({ children, href }) => {
  const pathname = usePathname();
  const active = href === pathname;
  //console.log(pathname)

  return (
    <Link
      href={href}
      scroll={true}
      className={`text-xs font-lato md:text-sm hover:bg-orange-200 hover:text-red-900 block py-2 md:py-3 px-2 md:px-4 ${
        active || (href.startsWith('/user_area/messages') && pathname.startsWith('/user_area/messages'))
          ? 'text-orange-400 font-semibold'
          : 'text-2xl text-black'
      }`}
    >
      {children}
    </Link>
  );
};

const MessageItem = ({children:msg_header, msg_sender, msg_time}) => {

  return (
    <div className='grid grid-cols-4 gap-1 text-sm text-gray-800 font-lato font-black p-2 py-5 hover:bg-orange-200 '>
      <div className='mx-2 '>{msg_sender}</div>
      <div className='mx-2 '>{msg_time}</div>
      <div className='mx-2 col-span-2'>{msg_header}</div>
      <line></line>
    </div>
  );
};

const Messages = () => {
  return (
    <div className='flex flex-row w-full h-[70vh] gap-x-10'>
      <div className='w-[45%] bg-white shadow-md rounded-b-lg  overflow-auto'>
        
      <div className='grid grid-row divide-y-2'>
      <div className='grid grid-cols-4 gap-1 text-white font-lato font-black bg-red-900 px-2 py-3 rounded-t-lg sticky top-0'>
          <div className='mx-2'>Sender</div>
          <div className='mx-2'>Timestamp</div>
          <div className='mx-2 col-span-2'>Subject</div>
      </div>
      {messages_list.map(({message_sender, message_time, message_header}, message_id) => (
            <MessageItem key={message_id} msg_sender={message_sender} msg_time={message_time}>{message_header}</MessageItem>
        ))}
      
      </div> 
       
      </div>
      <div className='border-2 w-[55%]'>
    Inbox here...
      </div>
    </div>
    );
};

Messages.getLayout = (page) => (
  <RootLayout>
    <DashboardLayout>{page}</DashboardLayout>
  </RootLayout>
);

export default Messages;
