import { useEffect } from 'react';
import Link from 'next/link';
import TextButton from 'components/UI/TextButton';
import DropdownMenu, { DropdownMenuItem } from 'components/UI/DropdownMenu';
import AccountCircleIconButton from 'components/IconButtons/AccountCircleIconButton';
import ExitToAppIconButton from 'components/IconButtons/ExitToAppIconButton';
import { useAuth } from 'utils/hocs/AuthProvider';
import LINKS from 'utils/constants/links';
import QUERY_PARAMS from 'utils/constants/query-params';
import COLOR_TYPES from 'utils/constants/color-types';
import ChatButton from 'components/IconButtons/ChatButton/ChatButton';

const TheUser = ({
  className,
  style
}) => {
  const { login, logout, isPending, isAuthenticated } = useAuth();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.tagembed.com/embed.min.js";
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      {isAuthenticated ? (
        <DropdownMenu
          align='right'
          DropElement={() => (
            <AccountCircleIconButton
              aria-label='User Profile'
              color={COLOR_TYPES.SECONDARY}
              className={className}
              style={style} />
          )}
        >
          <DropdownMenuItem>
            <Link href="https://commudle.chatango.com/" passHref>
              <a target="_blank" rel="noopener noreferrer">
                <ChatButton />
              </a>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={{
              pathname: LINKS.ADD_OR_EDIT_LIST.HREF
            }}>
              <a>My New Space</a>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={{
              pathname: LINKS.MY_LISTS.HREF,
              query: {
                [QUERY_PARAMS.PAGE]: 1
              }
            }}>
              <a>My Space</a>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <TextButton style={{ padding: 0 }} onClick={logout}>
              Logout
            </TextButton>
          </DropdownMenuItem>
        </DropdownMenu>
      ) : (
        <ExitToAppIconButton
          aria-label='Log In'
          color={COLOR_TYPES.SECONDARY}
          className={className}
          style={style}
          loading={isPending}
          onClick={login}
        />
      )}
      
      {/* Social Feed Dropdown */}
      <DropdownMenu
        align='right'
        DropElement={() => (
          <TextButton color={COLOR_TYPES.SECONDARY}
         style={{
              color: '#E91E63', // Replace with the same color code used in icons, e.g., pink/dark pink
              marginLeft: '8px', // Adjust this value for positioning closer to the icons
              fontSize: '16px' // Optional: Adjust size for consistency
            }}
          >Social Feed</TextButton>
        )}
      >
        <div
          className="tagembed-widget"
          style={{ width: '100%', height: '400px' }}
          data-widget-id="2136715"
          data-tags="false"
          view-url="https://widget.tagembed.com/2136715"
        ></div>
      </DropdownMenu>
      
    </>
  );
};

export default TheUser;
