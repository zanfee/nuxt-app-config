const appConfig = useAppConfig();

export default defineEventHandler(() => {
  const title = appConfig.app?.title ?? '';
  return title;
});
