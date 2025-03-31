import { CreateLinkDto } from "links/dto/create-link.dto";
import { UpdateLinkDto } from "links/dto/update-link.dto";
import { Link } from "links/entities/link.entity";

export const links = {
	dto: {
		CreateLinkDto,
		UpdateLinkDto,
	},
	entities: {
		Link,
	},
};
