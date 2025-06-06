import { useContext } from "react";
import { React } from "../../../../../../../../shared/modules/React";
import { Stack } from "../../../../../../../../shared/modules/MaterialImports/Stack";
import { Typography } from "../../../../../../../../shared/modules/MaterialImports/Typography";
// import { Box, Button, Card, Stack, TextField, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import ArticleIcon from "@mui/icons-material/Article";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styles from "./../../../../shared/config/variables.module.scss";
import CloseIcon from "@mui/icons-material/Close";
import { ModalStore, Store } from "../../../DataLabs/DataLabs";
import "../Search.scss";

const TotalYearsOfExperienceModalClose = () => {
  const onClickTYOEFilter = (event: any) => {
    event.stopPropagation();
    setSearchModalData((prevSearchData: any) => ({
      ...prevSearchData,
      minYear: "",
      maxYear: "",
      isMinYearValidation: false,
      isMaxYearValidation: false,
    }));
  };

  const onClickTYOEFiltSelOpt = (event: any) => {
    event.stopPropagation();
  };

  const [isMouseTYOEFilt, setIsMouseTYOEFilt] = React.useState(false);
  const onMouseOverTYOEFilt = () => {
    setIsMouseTYOEFilt(true);
  };

  const onMouseOutTYOEFilt = () => {
    setIsMouseTYOEFilt(false);
  };

  const [searchModalData, setSearchModalData] = useContext(ModalStore);

  const onClickRemoveMin = () => {
    setSearchModalData((prevSearchData: any) => ({
      ...prevSearchData,
      minYear: "",
    }));
  };

  const onClickRemoveMax = () => {
    setSearchModalData((prevSearchData: any) => ({
      ...prevSearchData,
      maxYear: "",
    }));
  };

  // console.log(searchModalData.minYear);
  // console.log(searchModalData.maxYear);

  return (
    <Stack sx={{ width: "100%" }}>
      <Stack
        sx={{
          width: "100%",
          borderBottom: "1px solid",
          color: styles.blackcolor,
          borderBottomColor: styles.borderBottomColor,
          "&:hover": {
            cursor: "pointer",
            backgroundColor: styles.backGroundColorOnHover,
            color: styles.primaryTextColor,
          },
        }}
      >
        <Stack
          sx={{
            paddingY: "10px",
            paddingLeft: "10px",
            paddingRight: "17px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stack
            spacing={1}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexGrow: "1",
              gap: "8px",
            }}
          >
            <PersonOutlineOutlinedIcon
              sx={{
                fontSize: "24px",
                paddingLeft: "8px",
                alignSelf: "center",
              }}
            />
            <Typography
              variant="body1"
              className="menu-title"
              sx={{
                marginTop: "0px !important",
                textAlign: "left",
              }}
            >
              Total Years of Experience
            </Typography>
          </Stack>
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              gap: "5px",
            }}
          >
            {searchModalData.minYear !== "" && searchModalData.maxYear !== "" && (
              <Stack
                onClick={onClickTYOEFilter}
                onMouseOver={onMouseOverTYOEFilt}
                onMouseOut={onMouseOutTYOEFilt}
                className="filter-child-num-con"
              >
                <CloseIcon
                  sx={{
                    color: isMouseTYOEFilt
                      ? styles.primaryTextColor
                      : "#737373",
                    fontSize: "16px",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily:
                      'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    fontSize: "12px",
                    fontWeight: "600",
                    color: isMouseTYOEFilt
                      ? styles.primaryTextColor
                      : styles.blackcolor,
                  }}
                >
                  2
                </Typography>
              </Stack>
            )}

            {searchModalData.minYear !== "" && searchModalData.maxYear === "" && (
              <Stack
                onClick={onClickTYOEFilter}
                onMouseOver={onMouseOverTYOEFilt}
                onMouseOut={onMouseOutTYOEFilt}
                className="filter-child-num-con"
              >
                <CloseIcon
                  sx={{
                    color: isMouseTYOEFilt
                      ? styles.primaryTextColor
                      : "#737373",
                    fontSize: "16px",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily:
                      'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    fontSize: "12px",
                    fontWeight: "600",
                    color: isMouseTYOEFilt
                      ? styles.primaryTextColor
                      : styles.blackcolor,
                  }}
                >
                  1
                </Typography>
              </Stack>
            )}

            {searchModalData.minYear === "" && searchModalData.maxYear !== "" && (
              <Stack
                onClick={onClickTYOEFilter}
                onMouseOver={onMouseOverTYOEFilt}
                onMouseOut={onMouseOutTYOEFilt}
                className="filter-child-num-con"
              >
                <CloseIcon
                  sx={{
                    color: isMouseTYOEFilt
                      ? styles.primaryTextColor
                      : "#737373",
                    fontSize: "16px",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily:
                      'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                    fontSize: "12px",
                    fontWeight: "600",
                    color: isMouseTYOEFilt
                      ? styles.primaryTextColor
                      : styles.blackcolor,
                  }}
                >
                  1
                </Typography>
              </Stack>
            )}
            <ArrowDropDownIcon sx={{ color: styles.arrowDropDownColor }} />
          </Stack>
        </Stack>
        {searchModalData.minYear !== "" ? (
          <Stack
            onClick={onClickTYOEFiltSelOpt}
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#ffffff !important",
              paddingTop: "6px",
              paddingLeft: "22.83px",
              paddingBottom: "14px",
            }}
          >
            <Typography
              sx={{
                fontFamily:
                  'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontSize: "12px",
                fontWeight: "600",
                color: "#000000",
                marginRight: "22px",
              }}
            >
              Min Year:
            </Typography>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "2px 7px",
                backgroundColor: "#919191",
                gap: "10px",
                // width: "80px",
                height: "20px",
                borderRadius: "2px",
              }}
            >
              <Typography
                sx={{
                  fontFamily:
                    'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#ffffff",
                }}
              >
                {">"}
                {searchModalData.minYear}
              </Typography>
              <CloseIcon
                onClick={onClickRemoveMin}
                sx={{ color: "#ffffff", fontSize: "small" }}
              />
            </Stack>
          </Stack>
        ) : (
          <></>
        )}
        {searchModalData.maxYear !== "" ? (
          <Stack
            onClick={onClickTYOEFiltSelOpt}
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#ffffff !important",
              paddingTop: "6px",
              paddingLeft: "22.83px",
              paddingBottom: "14px",
            }}
          >
            <Typography
              sx={{
                fontFamily:
                  'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                fontSize: "12px",
                fontWeight: "600",
                color: "#000000",
                marginRight: "22px",
              }}
            >
              Max Year:
            </Typography>

            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "2px 7px",
                backgroundColor: "#919191",
                gap: "10px",
                // width: "80px",
                height: "20px",
                borderRadius: "2px",
              }}
            >
              <Typography
                sx={{
                  fontFamily:
                    'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
                  fontSize: "12px",
                  fontWeight: "600",
                  color: "#ffffff",
                }}
              >
                {"<"}
                {searchModalData.maxYear}
              </Typography>
              <CloseIcon
                onClick={onClickRemoveMax}
                sx={{ color: "#ffffff", fontSize: "small" }}
              />
            </Stack>
          </Stack>
        ) : (
          <></>
        )}
      </Stack>
    </Stack>
  );
};

export default TotalYearsOfExperienceModalClose;
