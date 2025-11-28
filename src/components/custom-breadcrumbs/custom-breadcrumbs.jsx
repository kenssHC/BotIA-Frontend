import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';

// ----------------------------------------------------------------------

export function CustomBreadcrumbs({
  links,
  action,
  heading,
  moreLink,
  activeLast,
  sx,
  ...other
}) {
  const lastLink = links[links.length - 1];

  return (
    <Box sx={{ mb: 3, ...sx }}>
      <Stack direction="row" alignItems="center">
        <Box sx={{ flexGrow: 1 }}>
          {heading && (
            <Typography variant="h4" gutterBottom>
              {heading}
            </Typography>
          )}

          <Breadcrumbs separator={<Separator />} {...other}>
            {links.map((link, index) => (
              <LinkItem
                key={index}
                link={link}
                activeLast={activeLast}
                isLastItem={index === links.length - 1}
              />
            ))}
          </Breadcrumbs>
        </Box>

        {action && <Box sx={{ flexShrink: 0 }}>{action}</Box>}
      </Stack>

      {moreLink && (
        <Box sx={{ mt: 2 }}>
          {moreLink.map((href) => (
            <Link
              key={href}
              href={href}
              variant="body2"
              target="_blank"
              rel="noopener"
              sx={{ display: 'table' }}
            >
              {href}
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

function Separator() {
  return (
    <Box
      component="span"
      sx={{
        width: 4,
        height: 4,
        borderRadius: '50%',
        bgcolor: 'text.disabled',
        margin: 'auto 8px',
      }}
    />
  );
}

function LinkItem({ link, activeLast, isLastItem }) {
  const { title, path, icon } = link;

  const styles = {
    typography: 'body2',
    alignItems: 'center',
    color: 'text.primary',
    display: 'inline-flex',
    ...(isLastItem && {
      color: activeLast ? 'primary.main' : 'text.disabled',
      cursor: activeLast ? 'pointer' : 'default',
    }),
  };

  const renderContent = (
    <>
      {icon && <Box sx={{ mr: 1, '& svg': { width: 20, height: 20 } }}>{icon}</Box>}
      {title}
    </>
  );

  if (path) {
    return (
      <Link href={path} sx={styles}>
        {renderContent}
      </Link>
    );
  }

  return <Typography sx={styles}>{renderContent}</Typography>;
} 