import theme from "./theme";
import media from "./media";
import AppBar from "./AppBar";
import Dropdown from "./Dropdown";
import Logo from "./Logo";
import Preview from "./Preview";
import Button from "./Button";
import { Toast, ToastService } from "./Toast";
import InputField from "./InputField";
import useModal from "./hooks/useModal";
import PageHead from "./PageHead";
import Icon from "./icons/Icon";
import icons from "./icons";
import Loader from "./Loader";
import Tag from "./Tag";
import Tooltip from "./Tooltip";
import AutoClosable from "./AutoClosable";
import CinderblockProvider from "./providers/cinderblock";
import useScreenSize from "./hooks/useScreenSizeFromContext";
import Checkbox from "./Checkbox";
import Marker from "./Marker";
import OutlineButton from "./OutlineButton";
import MobileOnly from "./MobileOnly";
import DesktopOnly from "./DesktopOnly";
import tableComponents from "./Table";
import Helmet from "react-helmet";

const bundle = {
  theme,
  media,
  AppBar,
  Dropdown,
  Logo,
  Preview,
  Button,
  Toast,
  ToastService,
  InputField,
  useModal,
  PageHead,
  Icon,
  icons,
  Loader,
  Tag,
  Tooltip,
  AutoClosable,
  CinderblockProvider,
  useScreenSize,
  Checkbox,
  Marker,
  DesktopOnly,
  MobileOnly,
  OutlineButton,
  ...tableComponents,
  Helmet
};

module.exports = bundle;
